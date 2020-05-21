'use strict';

module.exports = class WordProcessor {
    countCharacter(textBlock) {
        return textBlock.length;
    }

    countCharacterWithoutSpace(textBlock) {
        return textBlock.replace(/ /g, '').length;
    }

    countWord(textBlock) {

        console.log(textBlock.trim().split(' '));

        if (textBlock.trim().split(' ').length === 1 && textBlock.trim().split(' ')[0] === '') {
            return 0;
        }

        return textBlock.trim().split(' ').length;
    }
};
