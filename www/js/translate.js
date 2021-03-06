/*
translate.js
using package: http://angular-translate.github.io/

file that stores all the strings displayed in the app using keys.
Languages available: English and Portuguese.
*/


angular.module('app.translate', ['pascalprecht.translate'])
  .config(function($translateProvider) {
    $translateProvider.translations('en', {
      INFO_TITLE: 'Info',
      FOODS_TITLE: 'Foods',
      TRACKING_TITLE: 'Tracking',
      GENDER_TITLE: 'Gender:',
      MAN: 'Man',
      WOMAN: 'Woman',
      OBJECTIVE_TITLE: 'Tell us your objective:',
      OBJECTIVE: 'Objective: ',
      WEIGHT_TITLE: 'Weight in kg:',
      HEIGHT_TITLE: 'Height in cm:',
      MEASURES_TITLE: 'Measures in cm:',
      WAIST_TITLE: 'Waist:',
      NECK_TITLE: 'Neck:',
      HIPS_TITLE: 'Hips:',
      ACTIVITY_TITLE: 'Describe yourself:',
      ACTIVITY: 'Activity Rate:',
      SEDENTARY: 'Sedentary',
      LIGHTLY: 'Lightly Active',
      MODERATELY: 'Moderately Active',
      VERY: 'Very Active',
      EXTREME: 'Extreme Active',
      CUTTING: 'Cutting (lose weight)',
      BULKING: 'Bulking (gain weight/muscle)',
      CUTTING_TITLE: 'Cutting',
      BULKING_TITLE: 'Bulking',
      RECOMMENDED_TITLE: 'The recommended is between',
      TARGETCUTTING_TITLE: 'Target weekly weight loss (in kg):',
      TARGETBULKING_TITLE: 'Target monthly muscle gain (in kg):',
      FATINTAKE_CUTTING_TITLE: 'Fat intake (g/kg of Lean mass):',
      FATINTAKE_BULKING_TITLE: 'Fat intake (% of daily calories):',
      FATINTAKE: 'Fat intake:',
      PROTEININTAKE_TITLE: 'Protein intake (g/kg of Lean mass):',
      PROTEININTAKE: 'Protein intake:',
      GRAMSPERLBM: 'g/kg of LBM',
      HELPME: 'Help me!',
      HELPME_DESCRIPTION: 'To get these informations, we highly recommend that you see a doctor or a nutritionist specialized in these topics.',
      HELPME_DESCRIPTION2: 'However, you can find tons of information on the internet. Here is two sites that we recommend:',
      BUTTON_NEXT: 'Next',
      BUTTON_DONE: 'Done',
      BUTTON_EDIT: 'Edit',
      MACROCYCLING_TITLE: 'Macro Cycling',
      MACROCYCLING_DESCRIPTION: 'If you work out more than 3 times a week, it is suggested that you do a',
      TRAINDAYS_TITLE: 'How many days do you train?',
      DIFFCALORIE_TITLE: 'Calorie intake percentage difference (in %) between rest and train days:',
      DIFFFAT_TITLE: 'Fat intake percentage difference (in %) between rest and train days:',
      NOTCYCLING_TITLE: 'I do not want this',
      BF: 'Body Fat:',
      LBM: 'Lean Body Mass:',
      BMR: 'Basal metabolic rate:',
      TDEE: 'Estimated Daily Calorie Intake:',
      TRAINDAYS: 'Train days:',
      CALORIES: 'Calories:',
      PROTEIN: 'Protein:',
      FAT: 'Fat:',
      CARB: 'Carb:',
      RESTDAYS: 'Rest days:',
      INFOPROVIDED_TITLE: 'Information Provided:',
      CALCULATED_TITLE: 'Information Calculated:',
      YOURPLAN_TITLE: 'Your Plan:',
      YOURDIET_TITLE: 'Your Diet:',
      SEDENTARY_DESCRIPTION: 'no exercise or little.',
      LIGHTLY_DESCRIPTION: '1-2 workout/sports per week.',
      MODERATELY_DESCRIPTION: '3-4 workout/sports per week.',
      VERY_DESCRIPTION: '5-6 workout/sports per week.',
      EXTREME_DESCRIPTION: '7 or more workout/sports per week.',
      FORM_ERROR: '* fields required or typed in a wrong way.',
      NEGATIVECARB: 'This macro cycling difference is too high or your weight loss target is too high.'
    })
    .translations('br', {
      INFO_TITLE: 'Info',
      FOODS_TITLE: 'Alimentos',
      TRACKING_TITLE: 'Registro',
      GENDER_TITLE: 'Gênero:',
      MAN: 'Homem',
      WOMAN: 'Mulher',
      OBJECTIVE_TITLE: 'Qual é seu objetivo?',
      OBJECTIVE: 'Objetivo: ',
      WEIGHT_TITLE: 'Peso em kg:',
      HEIGHT_TITLE: 'Altura em cm:',
      MEASURES_TITLE: 'Medidas in cm:',
      WAIST_TITLE: 'Cintura:',
      NECK_TITLE: 'Pescoço:',
      HIPS_TITLE: 'Quadril:',
      ACTIVITY_TITLE: 'Você se descreve como:',
      ACTIVITY: 'Atividade:',
      SEDENTARY: 'Sedentário',
      LIGHTLY: 'Levemente ativo',
      MODERATELY: 'Moderadamente ativo',
      VERY: 'Muito ativo',
      EXTREME: 'Extremamente ativo',
      CUTTING: 'Perder peso (cutting)',
      BULKING: 'Ganhar massa/músculo (bulking)',
      CUTTING_TITLE: 'Cutting',
      BULKING_TITLE: 'Bulking',
      RECOMMENDED_TITLE: 'O recomendado é entre',
      TARGETCUTTING_TITLE: 'Perda semanal de peso desejada:',
      TARGETBULKING_TITLE: 'Ganho mensal de musculo desejado:',
      FATINTAKE_CUTTING_TITLE: 'Ingestão de gordura (g/kg de massa magra):',
      FATINTAKE_BULKING_TITLE: 'Ingestão de gordura (% de caloria diária):',
      FATINTAKE: 'Ingestão de gordura:',
      PROTEININTAKE_TITLE: 'Ingestão de proteína (g/kg de massa magra):',
      PROTEININTAKE: 'Ingestão de proteína:',
      GRAMSPERLBM: 'g/kg de massa magra',
      HELPME: 'Preciso de ajuda!',
      HELPME_DESCRIPTION: 'Para essas informações, nós recomendamos que você consulte um médico especializado e um nutricionista.',
      HELPME_DESCRIPTION2: 'Porém, há uma gama de informações disponíveis na internet. Aqui está algum sites que recomendamos:',
      BUTTON_NEXT: 'Avançar',
      BUTTON_DONE: 'Feito!',
      BUTTON_EDIT: 'Editar',
      MACROCYCLING_TITLE: 'Ciclo de Macros',
      MACROCYCLING_DESCRIPTION: 'Se vc se exercita 3 ou mais vezes na semana, é sugerido que você faça um',
      TRAINDAYS_TITLE: 'Quantos dias vc se exercita:',
      DIFFCALORIE_TITLE: 'Diferença de calorias ingeridas entre dias de treino e descanso (em %):',
      DIFFFAT_TITLE: 'Diferença de gordura ingerida entre dias de treino e descanso (em %):',
      NOTCYCLING_TITLE: 'Não, obrigado',
      BF: 'Percentual de gordura:',
      LBM: 'Massa magra:',
      BMR: 'Taxa metabólica Basal:',
      TDEE: 'Ingestão diária de caloria estimada:',
      TRAINDAYS: 'Dias de treino:',
      CALORIES: 'Calorias:',
      PROTEIN: 'Proteína:',
      FAT: 'Gordura:',
      CARB: 'Carboidrato:',
      RESTDAYS: 'Dias de descanso:',
      INFOPROVIDED_TITLE: 'Informação preenchida:',
      CALCULATED_TITLE: 'Informação calculada:',
      YOURPLAN_TITLE: 'Seu plano:',
      YOURDIET_TITLE: 'Sua dieta:',
      SEDENTARY_DESCRIPTION: 'Não pratica exercícios',
      LIGHTLY_DESCRIPTION: '1-2 musculação/prática de esporte por semana.',
      MODERATELY_DESCRIPTION: '3-4 musculação/prática de esporte por semana.',
      VERY_DESCRIPTION: '5-6 musculação/prática de esporte por semana.',
      EXTREME_DESCRIPTION: '7 ou mais musculação/prática de esporte por semana.',
      FORM_ERROR: '* campos obrigatórios ou digitados erroneamente.',
      NEGATIVECARB: 'Este ciclo de macros está muito alto ou sua meta de perca de peso está muito alta.'
    })
    .registerAvailableLanguageKeys(['en', 'br'], {
      'en_US': 'en',
      'en_UK': 'en',
      'pt': 'br',
      'pt_br': 'br'
    })
    //.preferredLanguage('en')
    //Test weren't made to see if determinePreferredLanguage() works on native app.
    .determinePreferredLanguage()
    .useSanitizeValueStrategy("escaped");
});
