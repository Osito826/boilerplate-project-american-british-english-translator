const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator;

suite('Unit Tests', () => {
    suite('American to British English', () => {
        test("Translate Mangoes are my favorite fruit. >> Mangoes are my favourite fruit.", function (done) {
            const input = "Mangoes are my favorite fruit.";
            const result = "Mangoes are my favourite fruit.";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
        test("Translate I ate yogurt for breakfast. >> I ate yoghurt for breakfast.", function (done) {
            const input = "I ate yogurt for breakfast.";
            const result = "I ate yoghurt for breakfast.";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
        test("Translate We had a party at my friend's condo. >> We had a party at my friend's flat.", function (done) {
            const input = "We had a party at my friend's condo.";
            const result = "We had a party at my friend's flat.";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
        test("Translate Can you toss this in the trashcan for me? >> Can you toss this in the bin for me?", function (done) {
            const input = "Can you toss this in the trashcan for me?";
            const result = "Can you toss this in the bin for me?";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
        test("Translate The parking lot was full. >> The car park was full.", function (done) {
            const input = "The parking lot was full.";
            const result = "The car park was full.";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
        test("Translate Like a high tech Rube Goldberg machine. >> Like a high tech Heath Robinson device.", function (done) {
            const input = "Like a high tech Rube Goldberg machine.";
            const result = "Like a high tech Heath Robinson device.";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
        test("Translate To play hooky means to skip class or work. >> To bunk off means to skip class or work.", function (done) {
            const input = "To play hooky means to skip class or work.";
            const result = "To bunk off means to skip class or work.";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
        test("Translate No Mr. Bond, I expect you to die. >> No Mr Bond, I expect you to die.", function (done) {
            const input = "No Mr. Bond, I expect you to die.";
            const result = "No Mr Bond, I expect you to die.";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
        test("Translate Dr. Grosh will see you now. >> Dr Grosh will see you now.", function (done) {
            const input = "Dr. Grosh will see you now.";
            const result = "Dr Grosh will see you now.";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
        test("Translate Lunch is at 12:15 today. >> Lunch is at 12.15 today.", function (done) {
            const input = "Lunch is at 12:15 today.";
            const result = "Lunch is at 12.15 today.";
            assert.equal(translator.toBritishEnglish(input)[0], result);
            done();
        });
    });
    suite("British to American English", () => {
        test("Translate We watched the footie match for a while. >> We watched the soccer match for a while.", function (done) {
            const input = "We watched the footie match for a while.";
            const result = "We watched the soccer match for a while.";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
        test("Translate Paracetamol takes up to an hour to work. >> Tylenol takes up to an hour to work.", function (done) {
            const input = "Paracetamol takes up to an hour to work.";
            const result = "Tylenol takes up to an hour to work.";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
        test("Translate First, caramelise the onions. >> First, caramelize the onions.", function (done) {
            const input = "First, caramelise the onions.";
            const result = "First, caramelize the onions.";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
        test("Translate I spent the bank holiday at the funfair. >> I spent the public holiday at the carnival.", function (done) {
            const input = "I spent the bank holiday at the funfair.";
            const result = "I spent the public holiday at the carnival.";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
        test("Translate I had a bicky then went to the chippy. >> I had a cookie then went to the fish-and-chip shop.", function (done) {
            const input = "I had a bicky then went to the chippy.";
            const result = "I had a cookie then went to the fish-and-chip shop.";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
        test("Translate I've just got bits and bobs in my bum bag. >> I've just got odds and ends in my fanny pack.", function (done) {
            const input = "I've just got bits and bobs in my bum bag.";
            const result = "I've just got odds and ends in my fanny pack.";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
        test("Translate The car boot sale at Boxted Airfield was called off. >> The swap meet at Boxted Airfield was called off.", function (done) {
            const input = "The car boot sale at Boxted Airfield was called off.";
            const result = "The swap meet at Boxted Airfield was called off.";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
        test("Translate Have you met Mrs Kalyani? >> Have you met Mrs. Kalyani?", function (done) {
            const input = "Have you met Mrs Kalyani?";
            const result = "Have you met Mrs. Kalyani?";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
        test("Translate Prof Joyner of King's College, London. >> Prof. Joyner of King's College, London.", function (done) {
            const input = "Prof Joyner of King's College, London.";
            const result = "Prof. Joyner of King's College, London.";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
        test("Translate Tea time is usually around 4 or 4.30. >> Tea time is usually around 4 or 4:30.", function (done) {
            const input = "Tea time is usually around 4 or 4.30.";
            const result = "Tea time is usually around 4 or 4:30.";
            assert.equal(translator.toAmericanEnglish(input)[0], result);
            done();
        });
    });
    suite("Hightlight Translation Input", () => {
        test("Hightlight Mangoes are my favorite fruit.", function (done) {
            const input = "Mangoes are my favorite fruit.";
            const result = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
            assert.equal(translator.toBritishEnglish(input)[1], result);
            done();
        });
        test("Hightlight I ate yogurt for breakfast.", function (done) {
            const input = "I ate yogurt for breakfast.";
            const result = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
            assert.equal(translator.toBritishEnglish(input)[1], result);
            done();
        });
        test("Hightlight We watched the footie match for a while.", function (done) {
            const input = "We watched the footie match for a while.";
            const result = 'We watched the <span class="highlight">soccer</span> match for a while.';
            assert.equal(translator.toAmericanEnglish(input)[1], result);
            done();
        });
        test("Hightlight Paracetamol takes up to an hour to work.", function (done) {
            const input = "Paracetamol takes up to an hour to work.";
            const result = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
            assert.equal(translator.toAmericanEnglish(input)[1], result);
            done();
        });
    });
});
