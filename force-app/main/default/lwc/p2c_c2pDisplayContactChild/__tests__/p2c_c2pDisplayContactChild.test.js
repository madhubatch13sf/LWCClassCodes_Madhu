import { createElement } from 'lwc';
import P2c_c2pDisplayContactChild from 'c/p2c_c2pDisplayContactChild';

describe('c-p2-c-c2-p-display-contact-child', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-p2-c-c2-p-display-contact-child', {
            is: P2c_c2pDisplayContactChild
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});