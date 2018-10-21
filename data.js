//// QUESTION DATABASE 
const storeUpdated = [
  {
    question: ['What kind of foam is traditionally used to shape a surfboard?'], 
    answers: ['Poly (Polyurethane)', 'EPS (Expanded Polystyrene)', 'Fiberglass', 'Poly (Polyurethane)'  ],
    img: ['./mediaAssets/polyImg.jpg', 'foam'],
  },
  {
    question: ['What type of board is most common on the World Surf League?'], 
    answers: ['Various versions of the classic shortboard', 'Longboards are the best', 'High performance hydrofoil boards','Various versions of the classic shortboard'],
    img: ['./mediaAssets/shortBoard.jpg', 'shortBoard'],
  },
  {
    question: ['The purpose of a stringer is?'], 
    answers: ['For design', 'For balance', 'For structure and strength', 'For structure and strength'],
    img: ['./mediaAssets/stringer.jpg', 'stringer'],
  },
  {
    question: ['What do you call the very front tip of a surfboard?'], 
    answers: ['Top','Tip', 'Nose', 'Nose'],
    img: ['./mediaAssets/nose.jpg', 'nose'],
  },
  {
    question: ['What is the very back part of a surfboard called?'], 
    answers: ['Tail', 'Rear', 'Back', 'Tail'],
    img: ['./mediaAssets/tail.jpg', 'surfBoardTail'],
  },
  {
    q: ['A rip current is?'], 
    answers: ['The face of the wave', 'Long current moving out', 'Short current moving in', 'Long current moving out'],
    img: ['./mediaAssets/ripCurrent.jpg', 'ripCurrent'],
  },
  {
    question: ['What is a common surfer term when riding inside the barrel?'], 
    answers: ['Getting shacked', 'Cowabunga dude', 'Getting gnarly', 'Getting shacked'],
    img: ['./mediaAssets/barrel.jpg', 'barrelImg'],
  },
  {
    question: ['Which way do you paddle to best avoid a surfer coming at you on a wave?'], 
    answers: ['Toward the beach', 'Away from the shoulder', 'Toward the white wash', 'Toward the white wash'],
    img: ['./mediaAssets/paddleOut.jpg', 'whiteWash'],
  },
  {
    question: ['Where was surfing invented?'], 
    answers: ['Australia', 'Hawaii', 'California', 'Hawaii'],
    img: ['./mediaAssets/hawaii.jpg', 'hawaiiImg'],
  },
  {
    question: ['What do you call a little ripper?'], 
    answers: ['Grom', 'Kook', 'Shaka', 'Grom'],
    img: ['./mediaAssets/grom.jpg', 'gromSurfer'],
  },
];

console.log(storeUpdated[0].answers);