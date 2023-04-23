import React from "react";
import Card from "../../ui/Card";

type IncomeProps = {
  incomeStatement: any;
};

export default function IncomeStatement({ incomeStatement }: IncomeProps) {
  console.log(incomeStatement);
  return (
    <div id="income_statement">
      <Card className="h-24" />
    </div>
  );
}
