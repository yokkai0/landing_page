/* Formulaire - Rachat de crédits */

const formData = [
    {
        index: 1,
        step: 'Informations personnelles',
        questions: [
            { mandatory: true, label: 'Nom', type: 'string', placeholder: 'Veuillez indiquer votre nom complet.' },
            { mandatory: true, label: 'Prénom', type: 'string', placeholder: 'Veuillez indiquer votre prénom complet.' },
            { mandatory: true, label: 'Numéro de téléphone', type: 'number', placeholder: 'Numéro de téléphone pour une prise de contact rapide.' },
            { mandatory: true, label: 'Adresse mail', type: 'string', placeholder: 'Votre adresse e-mail pour que nous puissions vous contacter.' },
            { mandatory: true, label: 'Code postal et ville', type: 'string', placeholder: 'Votre lieu de résidence.' },
        ]
    },
    {
        index: 2,
        step: 'Situation financière',
        questions: [
            { mandatory: true, label: 'Profession', type: 'qcm', multiple: false, answers: ['Salarié', 'Indépendant', 'Retraité', 'Sans emploi'], placeholder: 'Quelle est votre situation professionnelle actuelle ?' },
            { mandatory: true, label: 'Revenu mensuel net', type: 'slider', range: [0, 10000], placeholder: 'Quel est votre revenu net mensuel ?' },
            { mandatory: true, label: 'Montant total des crédits à racheter', type: 'number', suffix: 'euros', placeholder: 'Quel est le montant total approximatif de vos crédits ?' },
            { mandatory: true, label: 'Nombre de crédits en cours', type: 'number', suffix: 'crédits', placeholder: 'Combien de crédits avez-vous actuellement ?' },
        ]
    },
    {
        index: 3,
        step: 'Objectif du rachat de crédits',
        questions: [
            { mandatory: true, label: 'Motif principal', type: 'qcm', multiple: true, answers: ['Réduire les mensualités', "Réduire le taux d'intérêt", 'Simplifier la gestion des crédits', 'Financer un nouveau projet'], placeholder: 'Quelle est la raison principale de votre demande ?' },
            { mandatory: false, label: '* Montant souhaité pour le financement complémentaire', type: 'number', suffix: 'euros', placeholder: "Avez-vous besoin d'un financement complémentaire ? Si oui, indiquez le montant." },
        ]
    },
    {
        index: 4,
        step: 'Situation personnelle',
        questions: [
            { mandatory: true, label: 'Statut matrimonial', type: 'qcm', multiple: false, answers: ['Célibataire', 'Marié(e)', 'Pacsé(e)', 'Divorcé(e)', 'Veuf/veuve'], placeholder: 'Quel est votre statut matrimonial ?' },
            { mandatory: true, label: 'Nombre de personnes à charge', type: 'number', suffix: 'personnes', placeholder: "Combien de personnes dépendent de vous financièrement ?" },
        ]
    },
    {
        index: 5,
        step: 'Informations complémentaires',
        questions: [
            { mandatory: true, label: 'Type de crédits à racheter', type: 'qcm', multiple: true, answers: ['Crédit immobilier', 'Crédit consommation', 'Crédit renouvelable', 'Autre'], placeholder: 'Quels types de crédits souhaitez-vous regrouper ?' },
            { mandatory: true, label: 'Situation immobilière', type: 'qcm', multiple: false, answers: ['Propriétaire', 'Locataire', 'Hébergé à titre gratuit'], placeholder: "Êtes-vous propriétaire ou locataire ?" },
            { mandatory: true, label: 'Montant des mensualités actuelles', type: 'number', suffix: 'euros', placeholder: "Quel est le montant total de vos mensualités actuelles ?" },
        ]
    },
    {
        index: 6,
        step: 'Consentement et prise de contact',
        questions: [
            { mandatory: true, label: 'Disponibilités pour un appel', type: 'string', placeholder: "Quels sont vos créneaux horaires préférés pour un appel ?" },
            { mandatory: true, label: 'Consentement RGPD', type: 'checkbox', placeholder: "J'accepte que mes données soient utilisées pour être contacté dans le cadre de ma demande de rachat de crédits." },
        ]
    },
];

export default formData;
  