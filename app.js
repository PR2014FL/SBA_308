// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07", //submitted this one late
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submission) {
  //BEGINNING OF FUNCTION
  //Calculating Total points of all assignments
  let sumOfTotals = 0;
  for (let i = 0; i < ag.assignments.length; i++) {
    if (ag.assignments[i].due_at !== "3156-11-15") {
      let eachTotal = ag.assignments[i].points_possible;
      console.log(`Assignment ${i + 1} is:`, eachTotal); //Test log
      sumOfTotals += eachTotal;
    }
  }

  //   console.log(`Total of all valid Assignments is: sumOfTotals`, sumOfTotals); //Test log
  // //Student ID numbers
  const firstStudentId = submission[0].learner_id;
  //   console.log(`First Student is: firstStudentId `, firstStudentId); //Test log
  const lastStudentId = submission[submission.length - 1].learner_id;
  //   console.log(`Last Student is: lastStudentId`, lastStudentId); //Test  log

  //   // //Calculating totals of each student

 try {
  let sumOfTotalsID125;
  let sumOfTotalsID132;

  // if (firstStudentId) {
  for (let i = 0; i < submission.length; i++) {
    let hwTotal = submission.submission[i].score;
    sumOfTotalsID125 += hwTotal;
    console.log(
      `Id 125's total: `,
      sumOfTotalsID125,
      `Id 132's total: `,
      sumOfTotalsID132
    );
  }}
  catch(error) {
    console.log(error)
  }
 
  // // Assignment 1 of student 125
  let asig1Of125= 0;
  for (const assignment of submission) {
    if (assignment.learner_id === 125 && assignment.assignment_id === 1) {
    asig1Of125 = assignment.submission.score;
    console.log (asig1Of125);
    }
  }
// // Assignment 2 of student 125
let asig2Of125= 0;
for (const assignment of submission) {
  if (assignment.learner_id === 125 && assignment.assignment_id === 2) {
  asig2Of125 = assignment.submission.score;
  console.log (asig2Of125);
  }
}

  // // Assignment 1 of student 132
  let asig1Of132= 0;
  for (const assignment of submission) {
    if (assignment.learner_id === 132 && assignment.assignment_id === 1) {
    asig1Of132 = assignment.submission.score;
    console.log (asig1Of132);
    }
  }
// // Assignment 2 of student 132
let asig2Of132= 0;
for (const assignment of submission) {
  if (assignment.learner_id === 132 && assignment.assignment_id === 2) {
  asig2Of132 = assignment.submission.score - 15; //Penalty for late
  console.log (asig2Of132);
  }
}

// //Adding up the totals for each student

const asigTotalsOf125 = asig1Of125 + asig2Of125
const asigTotalsOf132 = asig1Of132 + asig2Of132
console.log(`Totals for 125: ${asigTotalsOf125} and totals for 132: ${asigTotalsOf132}`);


  // }
  // else if (lastStudentId) {
  //     for (let i = 0; i < submission.length; i++) {
  //     let hwTotal = submission.submission[i].score;
  //     sumOfTotalsID132 =+ hwTotal;}
  // }
 

  // //Course info
  const courseId = course.id;
  console.log(courseId);

  // //Calculating scores of all assignments

  //   let sumOfScores1and2 = sumOfScoreAssign1 + sumOfScoreAssign2
  //   let assignment1;
  //   let assignment2;
  //   for (const a of submission) {
  //     if (a.assignment_id === 1) {
  //       assignment1 = a.assignment_id;
  //     } else if (a.assignment_id === 2) {
  //       assignment2 = a.assignment_id;
  //       break;
  //     }
  //   }
  //   console.log(
  //     `Assignment1 is ${assignment1} and Assignment2 is ${assignment2}`
  //   ); //Test log

  //   const assignment1Due = ag.assignments[0].due_at;
  //   const assignment2Due = ag.assignments[1].due_at;
  //   for (let i = 0; i < submission.length; i++) {}

  //   let learnerArray =[]; //answer goes in here
  //   if( )
  //    learnerArray =  [
  //     {
  //         id: firstStudentId,
  //         avg: sumOfScores1and2 / sumOfTotals,
  //         1: sumOfScoreAssign1 / ag.assignments[0].points_possible,
  //         2: sumOfScoreAssign2 /  ag.assignments[1].points_possible,
  //     }
  //   ]
  //   return learnerArray;
} //END OF FUNCTION!

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
//
//
