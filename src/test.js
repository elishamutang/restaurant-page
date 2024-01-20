// Test

export default function test() {

    const divTest = document.createElement('div');
    divTest.textContent = 'Testing this external js file';

    document.querySelector('body').append(divTest);
    
}