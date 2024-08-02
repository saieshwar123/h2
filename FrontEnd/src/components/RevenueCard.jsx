import { Card } from "@mui/material";
export  const RevenueCard = ({ title, showWarning ,orderCount,amount}) => {
    return (
      <Card>
      <div className="bg-white rounded shadow-sm p-4">
        <div className="">
            <div className="text-gray-700 flex ma-5">
                 
            {title}     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </div>
            <div className="flex justify-between">
                 <div className="text-2xl font-semibold">
                      ${amount}
                 </div>
                 {
                      orderCount?<div className="text-blue-500 underline font-bold">{orderCount} order(s) 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

                      </ div>:null
                 }
            </div>
        </div>
      </div>
      </Card>
    );
  };
  