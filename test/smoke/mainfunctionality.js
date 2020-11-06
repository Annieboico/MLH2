const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
const inputValues4Click = require('../../helpers/inputValues4Click')


describe('Checking the main functionality', function () { //define suite title by passing a string

    describe('Happy path', function () { //define sub-suite title by passing a string


        it('TC-030 Create button is clickable after 1- 4 are filled in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });
    });


        describe('Other path', function () {

            it('TC-031 Story is working', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType);
            $(sel.create).click();
            const btn = $(sel.tryAgainButton).isDisplayed();
            expect(btn).toEqual(true);
        });

            it('TC-032 Story is working', function () {
                browser.url('');
                inputValues4Click(data.name, data.gender.it, data.age, data.storyType);
                const btn = $(sel.tryAgainButton).isDisplayed();
                expect(btn).toEqual(true);
            });











    });
});


