import React, { useEffect, useState } from 'react';
import { Container, Box, Button, Typography, TextField, Radio, FormControlLabel, Checkbox, Slider, Grid } from '@mui/material';
import formData from '../../formData'; // Assurez-vous que le fichier formData est dans le même dossier
import Header from '../utils/Header'; // Assurez-vous que le fichier Header existe
import Footer from '../utils/Footer'; // Assurez-vous que le fichier Footer existe
import config from '../../config';
import HeaderMobile from '../utils/HeaderMobile';

const StepperForm = ({ navigate }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formValues, setFormValues] = useState({});
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const sendData = (formValues) => {
      const resData = {
        name: formValues['0']['0'],
        phone: formValues['0']['1'],
        email: formValues['0']['2'],
        location: formValues['0']['3'],
        proSituation: formValues['1']['0'],
        salary: formValues['1']['1'],
        totalDebts: formValues['1']['2'],
        creditsNumber: formValues['1']['3'],
        motivations: formValues['2']['0'].join(', '),
        complementAsked: formValues['2']['1'],
        persoSituation: formValues['3']['0'],
        dependents: formValues['3']['1'],
        creditsType: formValues['4']['0'].join(', '),
        homeSituation: formValues['4']['1'],
        actualMensualities: formValues['4']['2'],
        contactPreference: formValues['5']['0'],
        availabilities: formValues['5']['1'],
      }
      console.log(resData)
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
                return value !== undefined && value !== '';
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
                    <Grid container spacing={2}>
                        {question.answers.map((answer, idx) => (
                            <Grid
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
                            </Grid>
                        ))}
                    </Grid>
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

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: config.colors.primary }}>
            {
              window.innerWidth < 700 ?
                <HeaderMobile navigate={navigate} option={false}/>
              :
                <Header navigate={navigate} option={true}/>
            }
            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    padding: 2,
                }}
            >
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
                                Soumettre
                            </Button>
                        )}
                    </Box>
                </Box>
            </Container>
            <Footer navigate={navigate} />
        </div>
    );
};

export default StepperForm;
