import React, { useEffect, useState } from 'react';
import { Container, Box, Button, Typography, TextField, Radio, FormControlLabel, Checkbox, Slider, Grid2, CircularProgress } from '@mui/material';
import formData from '../../formData'; // Assurez-vous que le fichier formData est dans le même dossier
import config from '../../config';
import Footer from '../utils/Footer';
import Header from '../utils/Header';

const StepperForm = ({ navigate }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formValues, setFormValues] = useState({});
    const [formDone, setFormDone] = useState(false);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const postDataWithAuth = async (token, bodyObject) => {
        try {
          const response = await fetch(config.apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Définit le type de contenu
              'Authorization': `Bearer ${token}` // Ajoute le token d'autorisation
            },
            body: JSON.stringify(bodyObject) // Convertit l'objet en chaîne JSON
          });
      
          if (!response.ok) {
            // Gérer les erreurs HTTP (4xx, 5xx)
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
          }
      
          setFormDone(true);
          setLoading(false);
        } catch (error) {
          console.error('Fetch failed:', error);
          setLoading(false);
          throw error; // Relancer l'erreur pour un traitement supplémentaire
        }
    };
      
    const sendData = async (formValues) => {
      setLoading(true);
      const resData = {
        name: formValues['0']['0'],
        firstname: formValues['0']['1'],
        phone: parseInt(formValues['0']['2']),
        email: formValues['0']['3'],
        location: formValues['0']['4'],
        proSituation: formValues['1']['0'],
        salary: parseInt(formValues['1']['1']),
        totalDebts: parseInt(formValues['1']['2']),
        creditsNumber: parseInt(formValues['1']['3']),
        motivations: formValues['2']['0'].join(', '),
        complementAsked: parseInt(formValues['2']['1']),
        persoSituation: formValues['3']['0'],
        dependents: parseInt(formValues['3']['1']),
        creditsType: formValues['4']['0'].join(', '),
        homeSituation: formValues['4']['1'],
        actualMensualities: parseInt(formValues['4']['2']),
        availabilities: formValues['5']['0'],
      }
      try {
        const response = await fetch(config.apiUrlLogin, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Définit le type de contenu
          },
          body: JSON.stringify({email: 'admin@greengroup.fr', password: 'GreenGroup2025'}) // Convertit l'objet en chaîne JSON
        });
    
        if (!response.ok) {
          // Gérer les erreurs HTTP (4xx, 5xx)
          const errorMessage = `Error: ${response.status} - ${response.statusText}`;
          throw new Error(errorMessage);
        }
    
        // Retourner la réponse JSON si tout est correct
        const data = await response.json();
        postDataWithAuth(data.token, resData);
      } catch (error) {
        console.error('Fetch failed:', error);
        setLoading(false);
        throw error; // Relancer l'erreur pour un traitement supplémentaire
      }
    };

    const handleInputChange = (stepIndex, questionIndex, value) => {
        setFormValues((prev) => ({
            ...prev,
            [stepIndex]: {
                ...(prev[stepIndex] || {}),
                [questionIndex]: value,
            },
        }));
    };

    const isStepComplete = () => {
        const currentStepData = formData[currentStep];
        return currentStepData.questions.every((question, index) => {
            if (question.mandatory) {
                const value = formValues[currentStep]?.[index];
                return value !== undefined && value !== '' && value !== false;
            }
            return true;
        });
    };

    const nextStep = () => {
        if (currentStep < formData.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const renderQuestion = (question, stepIndex, questionIndex) => {
        switch (question.type) {
            case 'string':
            case 'number':
                return (
                    <TextField
                        fullWidth
                        type={question.type === 'number' ? 'number' : 'text'}
                        placeholder={question.placeholder}
                        value={formValues[stepIndex]?.[questionIndex] || ''}
                        onChange={(e) => handleInputChange(stepIndex, questionIndex, e.target.value)}
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            endAdornment: question.suffix && (
                                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                                    {question.suffix}
                                </Typography>
                            ),
                        }}
                    />
                );
            case 'qcm':
                return (
                    <Grid2 container spacing={2}>
                        {question.answers.map((answer, idx) => (
                            <Grid2
                                item
                                xs={12}
                                sm={6}
                                key={idx}
                                sx={{
                                    display:
                                        window.innerWidth > 700
                                            ? question.multiple || question.answers.length > 2
                                                ? 'block'
                                                : 'inline-flex'
                                            : 'block',
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        question.multiple ? (
                                            <Checkbox
                                                checked={
                                                    formValues[stepIndex]?.[questionIndex]?.includes(answer) || false
                                                }
                                                onChange={(e) => {
                                                    const currentValues =
                                                        formValues[stepIndex]?.[questionIndex] || [];
                                                    const newValues = e.target.checked
                                                        ? [...currentValues, answer]
                                                        : currentValues.filter((item) => item !== answer);
                                                    handleInputChange(stepIndex, questionIndex, newValues);
                                                }}
                                            />
                                        ) : (
                                            <Radio
                                                value={answer}
                                                checked={
                                                    formValues[stepIndex]?.[questionIndex] === answer || false
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(stepIndex, questionIndex, e.target.value)
                                                }
                                            />
                                        )
                                    }
                                    label={answer}
                                />
                            </Grid2>
                        ))}
                    </Grid2>
                );
            case 'slider':
                return (
                    <Box>
                        <Slider
                            min={question.range[0]}
                            max={question.range[1]}
                            value={formValues[stepIndex]?.[questionIndex] || question.range[0]}
                            onChange={(e, value) => handleInputChange(stepIndex, questionIndex, value)}
                            valueLabelDisplay="auto"
                        />
                        <Typography variant="caption">
                            {formValues[stepIndex]?.[questionIndex] || question.range[0]} {question.suffix}
                        </Typography>
                    </Box>
                );
            case 'checkbox':
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formValues[stepIndex]?.[questionIndex] || false}
                                onChange={(e) => handleInputChange(stepIndex, questionIndex, e.target.checked)}
                            />
                        }
                        label={question.placeholder}
                    />
                );
            default:
                return null;
        }
    };

    const handleClick = () => {
      navigate('landingPage');
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff' }}>
          {/* Header */}
            <Header link={'landingPage'} navigate={navigate} />

            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '90vh',
                    flex: 1,
                    padding: 2,
                }}
            >
                {
                    formDone ?
                        <Box
                            sx={{
                                width: '90%',
                                maxHeight: '80vh',
                                overflowY: 'auto',
                                backgroundColor: 'white',
                                padding: 3,
                                borderRadius: 2,
                                boxShadow: 3,
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                flexDirection: 'column'
                            }}
                        >
                            <Typography variant='h4' style={{ color: config.colors.main }}>
                                Merci d'avoir rempli notre formulaire, nous prendrons contact avec vous dans les plus brefs délais.
                            </Typography>
                            <Button variant="contained" style={{ marginTop: 15, backgroundColor: config.colors.main, color: '#fff' }} onClick={handleClick}>
                                Retour à l'accueil
                            </Button>
                        </Box>
                    : 
                        <Box
                            sx={{
                                width: '90%',
                                maxHeight: '80vh',
                                overflowY: 'auto',
                                backgroundColor: 'white',
                                padding: 3,
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        >
                            <Typography variant="h5" gutterBottom>
                                {formData[currentStep].step}
                            </Typography>
                            <form>
                                {formData[currentStep].questions.map((question, index) => (
                                    <Box key={index} sx={{ marginBottom: 2 }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {question.label}
                                        </Typography>
                                        {renderQuestion(question, currentStep, index)}
                                    </Box>
                                ))}
                            </form>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                                <Button
                                    variant="outlined"
                                    disabled={currentStep === 0}
                                    onClick={previousStep}
                                >
                                    Précédent
                                </Button>
                                {currentStep < formData.length - 1 ? (
                                    <Button
                                        variant="contained"
                                        disabled={!isStepComplete()}
                                        onClick={nextStep}
                                    >
                                        Suivant
                                    </Button>
                                ) : (
                                    <Button
                                        variant="contained"
                                        disabled={!isStepComplete()}
                                        onClick={() => sendData(formValues)}
                                    >
                                        {
                                            loading ?
                                            <CircularProgress />
                                            : "Soumettre"
                                        }
                                    </Button>
                                )}
                            </Box>
                        </Box>
                }
            </Container>
            {/* Footer */}
            <Footer navigate={navigate} />
        </div>
    );
};

export default StepperForm;
