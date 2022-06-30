import { _sum, _toLowwerCase, _sumWithInitial } from '.';

// Nowadays, the website testing field has stabilized. 
// Several testing tools receive very positive feedback from their users, 
// well-known testing best practices has emerged, 
// and testing became a more integral part of the job of web developers.

// Today’s cutting edge website testing tools are fast, 
// informative, and easy to work with. These tools would make your testing and developing experience much more enjoyable.

// In general, the central test types for websites are:
// Unit Tests - Testing of individual units like functions or classes by supplying input and making sure the output is as expected
// Integration Tests - Testing processes across several units to achieve their goals, including their side effects
// End-to-end Tests (also known as “E2E Tests” or “Functional Tests”)- Testing user scenarios on the browser itself by controlling the browser programmatically.
// These tests usually ignore the internals of applications and look at them like on a black box.

// Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
// It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

// Jest uses "matchers" to let you test values in different ways. 
// This document will introduce some commonly used matchers. 

// For the full list, see the expect API doc.
// When you're writing tests, you often need to check that values meet certain conditions. 
// expect gives you access to a number of "matchers" that let you validate different things.
// https://jestjs.io/docs/expect#tohavebeencalledtimesnumber

// https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870

describe('Test Logic', () => {
    it('should sum correctly' , () => {
        expect(_sum(2, 3)).toBe(2 + 3);
    });

    it('should lowwer case correctly' , () => {
        expect(_toLowwerCase('AAA')).toEqual('aaa');
    });

    it('should reduce with initial', () => {
        expect(_sumWithInitial(100, [1, 2, 3, 4])).toBe(110);
    });
 });