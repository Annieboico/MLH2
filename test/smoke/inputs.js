const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');




describe('Inputs', function () { //define suite title by passing a string

    describe('Inputs are displayed', function () { //define sub-suite title by passing a string

        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });


            it('TC-015 Gender He', function () {
                const gender = $$(sel.gender)[0].isDisplayed();
                expect(gender).toEqual(true);
            });

        it('TC-016 Gender She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });


            it('TC-018 Age', function () {
                const age =$(sel.age).isDisplayed();
                expect(age).toEqual(true);
            });

            it('TC-019 Story', function () {
                const story =$(sel.story2).isDisplayed();
                expect(story).toEqual(true);
            });

            it('TC-020 Create', function () {
                const create =$(sel.create).isDisplayed();
                expect(create).toEqual(true);
            });
    });

    describe('Placeholders are correct', function () {

        it('TC-021 Placeholder for name = Hero\'s name', function () {
            const name = $$(sel.namePlaceholder)[0].getAttribute('Placeholder');
            expect(name).toEqual(exp.placeholderName);
        });

        it('TC-022 Placeholder for age = Hero\'s age', function () {
            const age = $(sel.agePlaceholder).getAttribute('Placeholder');
            expect(age).toEqual(exp.placeholderAge);
        });

        it('TC-022 Placeholder for story = Type of the story', function () {
            const story = $(sel.storyPlaceholder).getText();
            expect(story).toEqual(exp.placeholderStory);
        });

        it('TC-023 RadiobuttonHe = He', function () {
            const radiobuttonHe =$$(sel.genderPlaceholder)[0].getText();
            expect(radiobuttonHe).toEqual(exp.radiobuttonHe);
        });

        it('TC-024 RadiobuttonShe = She', function () {
            const radiobuttonShe =$$(sel.genderPlaceholder)[1].getText();
            expect(radiobuttonShe).toEqual(exp.radiobuttonShe);
        });

        it('TC-025 RadiobuttonIt = It', function () {
            const radiobuttonIt =$$(sel.genderPlaceholder)[2].getText();
            expect(radiobuttonIt).toEqual(exp.radiobuttonIt);
        });

        it('TC-026 Placeholder for image = drag and drop your image here or browse', function () {
            const image = $(sel.imagePlaceholder).getText();
            expect(image).toEqual(exp.placeholderImage);
        });

        it('TC-027 Placeholder for submit button = Create!', function () {
            const submit = $(sel.createPlaceholder).getText();
            expect(submit).toEqual(exp.placeholderCreate);
        });


    })


    });