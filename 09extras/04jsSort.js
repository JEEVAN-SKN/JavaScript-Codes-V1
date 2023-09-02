// js sort is a very customisable method but has its own drawbacks

console.log([6,-2,2,-7].sort()); // we expect [-7,-2,2,6]
    // but we get output as [-2,-7,2,6]

// this is beacaues js sort converts elements into strings and then orders according to UTF-16 sequence(UTF-16 includes emojis,other langs)

// but in this case if we need only to use sort in mathmathic sort way 
//then we can define the way sort methods sorts on

function mySort(a,b){
    if(a>b){
        return 1 
    } else if (b>a){
        return -1
    }else {
        return 0
    }
}

console.log([6,-2,2,-7].sort(mySort)); // noe we get expected result as -7,-2,2,6

// but these may make u feel that sort is unnecessarily complex 
// the below example shows the applications and customability of js sort 

function batmanGameOrder(a,b) {   //sorting method 
    var batman = ["Arkham Origins",  // array used for indexing in comparison
        "Arkham Origins Blackgate",
        "Assault on Arkham",
        "Arkham Asylum",
        "Arkham City",
        "Arkham Knight"
        ]

    return batman.indexOf(a)-batman.indexOf(b) 
}

var games = ["Arkham Knight",   //array to be sorted 
        "Arkham Asylum",
        "Arkham Origin",
        "Arkham Origins Blackgate" 
        ];

console.log(games.sort(batmanGameOrder));  // here we customise the sort in a way where we compare different strings and 
            // sort them out according our own definition 