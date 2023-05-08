const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');


const reverseDictionary = (obj) => {
    return Object.assign(
        {},
        ...Object.entries(obj).map(([a, b]) => ({ [b]: a }))
    );
};
class Translator {
    toBritishEnglish(text) {
        const dictionary = { ...americanOnly, ...americanToBritishSpelling };
        const titles = americanToBritishTitles;
        const timeReg = /([1-9]|1[012]):[0-5][0-9]/g;
        const translated = this.translate(
            text,
            dictionary,
            titles,
            timeReg,
            "toBritish"
        );
        if (!translated) {
            return text;
        }
        return translated;
    }
    toAmericanEnglish(text) {
        const dictionary = { ...britishOnly, ...reverseDictionary(americanToBritishSpelling) };
        const titles = reverseDictionary(americanToBritishTitles);
        const timeReg = /([1-9]|1[012]).[0-5][0-9]/g;
        const translated = this.translate(
            text,
            dictionary,
            titles,
            timeReg,
            "toAmerican"
        );
        if (!translated) {
            return text;
        }
        return translated;
    }
    translate(text, dictionary, titles, timeReg, locale) {
        const lowerCaseText = text.toLowerCase();
        const matchesMap = {};
        //titles search
        Object.entries(titles).map(([a, b]) => {
            if (lowerCaseText.includes(a)) {
                matchesMap[a] = b.charAt(0).toUpperCase() + b.slice(1);
            }
        });
        //words with space filter
        const spaceInWords = Object.fromEntries(
            Object.entries(dictionary).filter(([a, b]) => a.includes(" "))
        );
        //words with space search
        Object.entries(spaceInWords).map(([a, b]) => {
            if (lowerCaseText.includes(a)) {
                matchesMap[a] = b;
            }
        });
        //single words search
        lowerCaseText.match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g).forEach((word) => {
            if (dictionary[word]) matchesMap[word] = dictionary[word];
        });

        const matchTime = lowerCaseText.match(timeReg);

        if (matchTime) {
            matchTime.map((t) => {
                if (locale === "toBritish") {
                    return (matchesMap[t] = t.replace(":", "."));
                }
                return (matchesMap[t] = t.replace(".", ":"));
            });
        }

        if (Object.keys(matchesMap).length === 0) return null;
        console.log("matchesMap :>>", matchesMap);
        const translation = this.replaceAll(text, matchesMap);

        const highlightTranslation = this.replaceAllWithHighlight(
            text,
            matchesMap
        );

        return [translation, highlightTranslation];
    }

    replaceAll(text, matchesMap) {
        const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
        return text.replace(re, (matched) => matchesMap[matched.toLowerCase()]);
    }
    replaceAllWithHighlight(text, matchesMap) {
        const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
        return text.replace(re, (matched) => {
            return `<span class="highlight">${
                matchesMap[matched.toLowerCase()]
                }</span>`;
        });
    }

}

module.exports = Translator;