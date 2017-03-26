var row_1 = "";             // definiujemy zmienną tekstową która będzie naszym pierwszym wierszem szachownicy
var row_2 = "";             // definiujemy zmienna tekstową która będzie naszym drugim wierszem szachownicy
var chessboard = "";        // definiujemy zmienną tekstową której wartośc będzie wyglądać jak szachownica

for (i = 0; i < 30; i++) {  // budujeny wiersze szachownicy ze znaków "#" oraz " " w oparciu o parzystość licznika pętli

  if ((i % 2)) {
    row_1 += "#";           // znaki w wierszu pierwszym występujące na 1, 3, 5... miejscu to "#"
    row_2 += " ";           // znaki w wierszu drugim występujące na 1, 3, 5... miejscu to " "
  }
  else {
    row_1 += " ";	          // znaki w wierszu pierwszym występujące na 0, 2, 2... miejscu to " "
    row_2 += "#";           // znaki w wierszu drugim występujące na 0, 2, 4... miejscu to "#".}
  }

for (i = 0; i < 30; i++) {      // tworzymy szachownicę przez naprzemienną konkatenację row_1 oraz row_2 
  if (!(i % 2)) {	              // wraz ze znakiem nowego wiersza.
    chessboard += row_1 + "\n"; 
  }

  else {
    chessboard += row_2 + "\n";
  }

}

console.log(chessboard);

