function getLetter(s) {
    const A = ['a', 'e', 'i', 'o', 'u'],
          B = ['b','c','d','f','g'],
          C = ['h','j','k','l','m'],
          D = ['n','p','q','r','s','t','v','w','x','y','z'],
          sFirstPosition = s[0];
    let letter;
    switch(true){
        case A.includes(sFirstPosition):
            letter = 'A';
            break;
        case B.includes(sFirstPosition):
            letter = 'B';
            break;
        case C.includes(sFirstPosition):
            letter = 'C';
            break;
        case D.includes(sFirstPosition):
            letter = 'D';
            break;
    }
    return letter;
}
getLetter('adfgt');