function main() {
    const PI = Math.PI;
    let r = 2.6;
    // Print the area of the circle:
    let area = PI * r * r;
    console.log(area);
    
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r;
    console.log(perimeter);

    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
};
main();