export class AllServices {

    books = [
        {
            title: 'Popov',
            author: 'Paul Loup SULITZER',
            etat: true
        },
        {
            title: 'Code Zéro',
            author: 'Ken Follett',
            etat: true
        },
        {
            title: 'Comment se faire des amis',
            author: 'Dale Carnegi',
            etat: false
        }
    ];

    disques = [
        {
            title: 'Subliminal',
            author: 'Maitre Gims',
            etat: false
        },
        {
            title: 'Oust Side',
            author: 'Booba',
            etat: false
        },
        {
            title: 'Milesime',
            author: 'Pascal Obispo',
            etat: true
        }
    ];
elementStatus(index: number, element: string){
    if(element === 'disques'){
        this.disques[index].etat = !this.disques[index].etat;
    }
    else if(element === 'books'){
        this.books[index].etat = !this.books[index].etat;
    }
}

}