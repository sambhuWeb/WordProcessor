'use strict';

module.exports = class WordProcessor {
    countCharacter(textBlock) {
        return textBlock.length;
    }

    countCharacterWithoutSpace(textBlock) {
        return textBlock.replace(/ /g, '').length;
    }
};
