
export const toRna = (strand) => {

if (strand === '') { 
    return ''
} else {

     
    
    strand = strand.toUpperCase()
    strand = strand.split('')  //POOF! strand is now an array

   
    const arrayLength = strand.length 
    let arrayIndex = 0  
while (arrayIndex < arrayLength) {
    if (strand[arrayIndex] === 'C') {
        strand.splice(arrayIndex, 1, 'G')
        arrayIndex ++
    }else if (strand[arrayIndex] === 'G') {
        strand.splice(arrayIndex, 1, 'C')
        arrayIndex ++
    }else if (strand[arrayIndex] === 'A') {
        strand.splice(arrayIndex, 1, 'U')
        arrayIndex ++
    }else if (strand[arrayIndex] === 'T') {
        strand.splice(arrayIndex, 1, 'A')
        arrayIndex ++
    }else {
        throw new Error('Invalid input DNA.')
    }
}
console.log(arrayIndex)


    strand = strand.toString() // POOF! strand is now a string
 console.log(strand)
    strand = strand.replace(/,/g, '')
        console.log(strand)
    return strand
}
}

