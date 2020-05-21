'use strict';

const expect = require('chai').expect;
const WordProcessor = require('../index');

describe('Word Processor Test', function() {
    it('It correctly counts character including space of the given roman string', async () => {
        // Given
        const textBlock = 'A quick brown fox jump over a lazy dog';

        // When
        const wordProcessor = new WordProcessor();
        const totalCharacters = wordProcessor.countCharacter(textBlock);

        // Then
        expect(totalCharacters).equal(38);
    });

    it('It correctly counts character including space of the given nepali string', async () => {
        // Given
        const textBlock = 'एउटा अल्छी कुकुरमा छिटो खैरो फ्याक्स उफ्रिन्छ';

        // When
        const wordProcessor = new WordProcessor();
        const totalCharacters = wordProcessor.countCharacter(textBlock);

        // Then
        expect(totalCharacters).equal(45);
    });

    it('It correctly counts character without space of the given roman string', async () => {
        // Given
        const textBlock = 'A quick brown fox jump over a lazy dog';

        // When
        const wordProcessor = new WordProcessor();
        const totalCharacters = wordProcessor.countCharacterWithoutSpace(textBlock);

        // Then
        expect(totalCharacters).equal(30);
    });

    it('It correctly counts character without space of the given nepali string', async () => {
        // Given
        const textBlock = 'एउटा अल्छी कुकुरमा छिटो खैरो फ्याक्स उफ्रिन्छ';

        // When
        const wordProcessor = new WordProcessor();
        const totalCharacters = wordProcessor.countCharacterWithoutSpace(textBlock);

        // Then
        expect(totalCharacters).equal(39);
    });

    it('It correctly counts word of the given roman string', async () => {
        // Given
        const textBlock = 'A quick brown fox jump over a lazy dog';

        // When
        const wordProcessor = new WordProcessor();
        const totalCharacters = wordProcessor.countWord(textBlock);

        // Then
        expect(totalCharacters).equal(9);
    });

    it('It correctly counts word of the given roman string', async () => {
        // Given
        const textBlock = 'one';

        // When
        const wordProcessor = new WordProcessor();
        const totalCharacters = wordProcessor.countWord(textBlock);

        // Then
        expect(totalCharacters).equal(1);
    });

    it('It correctly counts word of the given roman string', async () => {
        // Given
        const textBlock = '';

        // When
        const wordProcessor = new WordProcessor();
        const totalCharacters = wordProcessor.countWord(textBlock);

        // Then
        expect(totalCharacters).equal(0);
    });

    it('It correctly counts word of the given nepali string', async () => {
        // Given
        const textBlock = 'एउटा अल्छी कुकुरमा छिटो खैरो फ्याक्स उफ्रिन्छ';

        // When
        const wordProcessor = new WordProcessor();
        const totalCharacters = wordProcessor.countWord(textBlock);

        // Then
        expect(totalCharacters).equal(7);
    });
});
