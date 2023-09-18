function solution(id_list, report, k) {
  var answer = [];
  // console.log(id_list, report, k);
  let removecontext = ",";
  let reportlist = JSON.stringify(report);
  reportlist = reportlist.slice(1);
  reportlist = reportlist.slice(0, reportlist.length - 1);
  reportlist = reportlist.split(removecontext);
  const report_idlist = [];
  const singo_idlist = [];
  let judge = true;
  for (var i = 0; i < reportlist.length; i++) {
    let idstring = "";
    for (var j = 0; j < reportlist[i].length; j++) {
      // console.log(reportlist[i].charAt(j));
      if (reportlist[i].charAt(j) == '"') {
        if (judge == false) {
          singo_idlist.push(idstring);
          judge = true;
        }
        continue;
      }
      if (reportlist[i].charAt(j) == " ") {
        report_idlist.push(idstring);
        idstring = "";
        judge = false;
        continue;
      }

      idstring = idstring + reportlist[i].charAt(j);
    }
  }
  console.log("신고당한사람", singo_idlist);
  console.log("신고한사람", report_idlist);
  // let asd = new Set(singo_idlist.concat(report_idlist));
  console.log("전체 유저", id_list);
  const report_count = new Set(singo_idlist);

  // console.log(report_count.has("muzi"));
  // for (let i = 0; i < report_count.size; i++) {
  //   let count = 0;
  //   for (let j = 0; j < id_list.length; j++) {
  //     if (singo_idlist[i].includes(id_list[j])) {
  //       console.log("있다", singo_idlist[i]);
  //       count++;
  //     }
  //   }
  //   realcount.push(count);
  // }

  // // console.log(report_count.values());
  // for (let i = 0; i < singo_idlist.length; i++) {
  //   let count = 0;
  //   // report_count.forEach((values) => {
  //   //   if (values == singo_idlist[i]) {
  //   //     console.log(values);
  //   //     count++;
  //   //   }
  //   // });
  //   realcount.push(count);
  //   // for (let j = 0; j < singo_idlist.length; j++) {
  //   //   if (report_count[i] == singo_idlist[j]) {
  //   //     count++;
  //   //   }
  //   // }
  //   // report_count.add(count);
  // }
  // // console.log(report_count);

  const banneduser = [];

  let eachuesrreportlist = [];
  for (let i = 0; i < id_list.length; i++) {
    eachuesrreportlist[i] = new Array();
    for (let j = 0; j < singo_idlist.length; j++) {
      if (id_list[i] == report_idlist[j]) {
        eachuesrreportlist[i].push(singo_idlist[j]);
        if (eachuesrreportlist[i].length == 1) {
          console.log("하 ㅅㅂ ㅋㅋ");
          continue;
        } else if (eachuesrreportlist[i][i - 1] == eachuesrreportlist[i][i]) {
          console.log("여기오긴하냥");
          console.log(eachuesrreportlist);
          eachuesrreportlist[i].pop();
          console.log(eachuesrreportlist);
        }
      }
    }
  }

  console.log(eachuesrreportlist);
  const realcount = [];
  report_count.forEach((value) => {
    let count = 0;
    for (let i = 0; i < eachuesrreportlist.length; i++) {
      if (singo_idlist[i] == value) {
        count++;
      }
    }
    realcount.push(value);
    realcount.push(count);
  });

  console.log(report_count);
  console.log("realcount", realcount);
  for (let i = 0; i < realcount.length; i++) {
    if (i % 2 == 1) {
      if (realcount[i] >= k) {
        banneduser.push(realcount[i - 1]);
      }
    }
  }
  console.log("banneduser", banneduser);

  const lastarr = [];
  for (i = 0; i < id_list.length; i++) {
    let count = 0;
    for (let j = 0; j < banneduser.length; j++) {
      for (let n = 0; n < eachuesrreportlist[i].length; n++) {
        if (eachuesrreportlist[i][n] == banneduser[j]) {
          count++;
        }
      }
    }
    lastarr.push(count);
  }
  console.log("lastarr", lastarr);

  return lastarr;
}

// let id_list = ["muzi", "frodo", "apeach", "neo"];
// let report = [
//   "muzi frodo",
//   "apeach frodo",
//   "frodo neo",
//   "muzi neo",
//   "apeach muzi",
// ];
// let k = 2;

// // solution(id_list, report, k);

// function solution(id_list, report, k) {
//   const reportCount = {}; // 사용자당 신고 횟수를 저장하는 객체
//   const bannedUser = new Set(); // k회 이상 신고된 사용자를 저장하는 Set

//   // 사용자당 신고 횟수를 계산
//   for (const entry of report) {
//     const [reporter, target] = entry.split(" ");

//     // 한 유저가 같은 유저를 여러 번 신고한 경우 1회로 처리
//     if (!reportCount[target]) {
//       reportCount[target] = new Set(); // Set을 사용하여 중복 신고 방지
//     }
//     reportCount[target].add(reporter);
//   }

//   console.log(reportCount);
//   // k회 이상 신고된 사용자를 bannedUser Set에 추가
//   for (const user in reportCount) {
//     if (reportCount[user].size >= k) {
//       bannedUser.add(user);
//     }
//   }

//   const result = [];

//   // 각 사용자의 결과 계산
//   for (const user of id_list) {
//     let count = 0;
//     for (const entry of report) {
//       const [reporter, target] = entry.split(" ");
//       if (reporter === user && bannedUser.has(target)) {
//         count++;
//       }
//     }
//     result.push(count);
//   }

//   return result;
// }

const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

const result = solution(id_list, report, k);
console.log(result); // 출력: [2, 1, 1, 0]
