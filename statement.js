const invoices = [
  { "customer": "BigCo",
    "performances": [
      { "playID": "hamlet", "audience": 55 },
      { "playID": "as-like", "audience": 35 },
      { "playID": "othello", "audience": 40 }
    ]
  }
]

const plays = {
  "hamlet": {"name": "Hamlet", "type": "tragedy"},
  "as-like": {"name": "As You Like It", "type": "comedy"},
  "othello": {"name": "Othello", "type": "tragedy"}
}

function playFor(aPerformance){
  return plays[aPerformance.playID];
}

function amountFor(aPerformance){
  let result = 0;

  switch (playFor(aPerformance).type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      } result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknown type: ${playFor(aPerformance).type}`);
  }

  return result;
}

function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
  return result;
}


function statement (invoice) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2 }).format;

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf)
    result += ` ${playFor(perf).name}: ${format(amountFor(perf)/100)} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf);
  }
  result += `Amount owed is ${format(totalAmount/100)}\n`;
  result += `You earned ${volumeCredits} credits\n`; return result;
}

function test(){
  const resultExpected = [
    'Statement for BigCo\n' +
      ' Hamlet: $650.00 (55 seats)\n' +
      ' As You Like It: $580.00 (35 seats)\n' +
      ' Othello: $500.00 (40 seats)\n' +
      'Amount owed is $1,730.00\n' +
      'You earned 47 credits\n'
  ]

  const result = invoices.map(invoice=>{
    return statement(invoice, plays)
  })

  const toEqualExpected = result.toString() === resultExpected.toString();

  const resultTest = toEqualExpected ? "test Success" : "test Failed";

  return {
    resultTest, resultExpected, result
  }
}

const tests_mock = test()

console.log(tests_mock)



