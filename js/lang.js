var arrLang = {
    'ua': {
        'title': 'Front-end розробник',
        'exp': 'Досвід роботи:',
        'name': 'Стаc Денисов',
        'edu' : 'Освіта:',
        'prskl' : "Технічні навички:",
        'scskl' : 'Додаткові навички:',
        'langs' : 'Мови:',
        'crs' : 'Курси:',
        'w' : 'Міністерство соціальної політики',
        'e' : 'Арт академія сучасного мистецтва імені "Сальвадора Далі".',
        'ee' : 'образотворче мистецтво, декоративне мистецтво,\n' +
            'реставрація - мистецтвознавець критик, вища.',
        'e1' : 'КНУБА\n' +
            'Автоматизації та інформаційних технологій -\n' +
            'професійне навчання комп\'ютеризації, вища.\n' +
            'Київ, 2011',
        'ee1' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        'ua':'UA',
        'ru': 'EN'
    },

    'en': {
        'title': `Front-end developer`,
        'exp': 'Experience',
        'name': 'Denysov Stanislav',
        'edu' : 'Education:',
        'prskl' : "Hard skills",
        'scskl' : 'Soft skills',
        'langs' : 'Languages:',
        'crs' : 'Courses:',
        'w' : 'Ministry of Social Policy',
        'e' : '"Salvador Dali" Art Academy of Contemporary Art.',
        'ee' : 'fine art, decorative art,' +
            'restoration - art critic, higher.',
        'e1' : 'KNUBA of\n' +
            'Automation and Information Technologies -\n' +
            'vocational training in computerization, higher.\n' +
            'Kyiv, 2011',
        'ee' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        '' : '',
        'ua':'UA',
        'ru': 'EN'
    }
};

// Process translation
$(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            $(this).html(arrLang[lang][$(this).attr('key')] ) ;
        });
    });
});



