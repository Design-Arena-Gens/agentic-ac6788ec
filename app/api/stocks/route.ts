import { NextResponse } from 'next/server';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
  sector: string;
}

// Sample NSE stocks data - In production, this would fetch from a real API
const generateStockData = (): Stock[] => {
  const stocks = [
    { symbol: 'RELIANCE', name: 'Reliance Industries Ltd', sector: 'Energy', basePrice: 2450 },
    { symbol: 'TCS', name: 'Tata Consultancy Services Ltd', sector: 'IT', basePrice: 3680 },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', sector: 'Banking', basePrice: 1620 },
    { symbol: 'INFY', name: 'Infosys Ltd', sector: 'IT', basePrice: 1480 },
    { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd', sector: 'Banking', basePrice: 1085 },
    { symbol: 'HINDUNILVR', name: 'Hindustan Unilever Ltd', sector: 'FMCG', basePrice: 2380 },
    { symbol: 'ITC', name: 'ITC Ltd', sector: 'FMCG', basePrice: 445 },
    { symbol: 'SBIN', name: 'State Bank of India', sector: 'Banking', basePrice: 625 },
    { symbol: 'BHARTIARTL', name: 'Bharti Airtel Ltd', sector: 'Telecom', basePrice: 1285 },
    { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank Ltd', sector: 'Banking', basePrice: 1750 },
    { symbol: 'LT', name: 'Larsen & Toubro Ltd', sector: 'Infrastructure', basePrice: 3420 },
    { symbol: 'AXISBANK', name: 'Axis Bank Ltd', sector: 'Banking', basePrice: 1095 },
    { symbol: 'BAJFINANCE', name: 'Bajaj Finance Ltd', sector: 'Finance', basePrice: 6850 },
    { symbol: 'ASIANPAINT', name: 'Asian Paints Ltd', sector: 'Consumer', basePrice: 2920 },
    { symbol: 'MARUTI', name: 'Maruti Suzuki India Ltd', sector: 'Automobile', basePrice: 10850 },
    { symbol: 'HCLTECH', name: 'HCL Technologies Ltd', sector: 'IT', basePrice: 1245 },
    { symbol: 'WIPRO', name: 'Wipro Ltd', sector: 'IT', basePrice: 425 },
    { symbol: 'ULTRACEMCO', name: 'UltraTech Cement Ltd', sector: 'Cement', basePrice: 8950 },
    { symbol: 'SUNPHARMA', name: 'Sun Pharmaceutical Industries Ltd', sector: 'Pharma', basePrice: 1685 },
    { symbol: 'TITAN', name: 'Titan Company Ltd', sector: 'Consumer', basePrice: 3280 },
    { symbol: 'NESTLEIND', name: 'Nestle India Ltd', sector: 'FMCG', basePrice: 2485 },
    { symbol: 'ADANIENT', name: 'Adani Enterprises Ltd', sector: 'Infrastructure', basePrice: 2320 },
    { symbol: 'ONGC', name: 'Oil & Natural Gas Corporation Ltd', sector: 'Energy', basePrice: 245 },
    { symbol: 'NTPC', name: 'NTPC Ltd', sector: 'Power', basePrice: 335 },
    { symbol: 'POWERGRID', name: 'Power Grid Corporation of India Ltd', sector: 'Power', basePrice: 285 },
    { symbol: 'M&M', name: 'Mahindra & Mahindra Ltd', sector: 'Automobile', basePrice: 1895 },
    { symbol: 'TATAMOTORS', name: 'Tata Motors Ltd', sector: 'Automobile', basePrice: 745 },
    { symbol: 'TECHM', name: 'Tech Mahindra Ltd', sector: 'IT', basePrice: 1165 },
    { symbol: 'BAJAJFINSV', name: 'Bajaj Finserv Ltd', sector: 'Finance', basePrice: 1585 },
    { symbol: 'DRREDDY', name: 'Dr Reddys Laboratories Ltd', sector: 'Pharma', basePrice: 5280 },
    { symbol: 'CIPLA', name: 'Cipla Ltd', sector: 'Pharma', basePrice: 1420 },
    { symbol: 'DIVISLAB', name: 'Divi\'s Laboratories Ltd', sector: 'Pharma', basePrice: 3685 },
    { symbol: 'TATASTEEL', name: 'Tata Steel Ltd', sector: 'Metals', basePrice: 142 },
    { symbol: 'HINDALCO', name: 'Hindalco Industries Ltd', sector: 'Metals', basePrice: 625 },
    { symbol: 'JSWSTEEL', name: 'JSW Steel Ltd', sector: 'Metals', basePrice: 885 },
    { symbol: 'COALINDIA', name: 'Coal India Ltd', sector: 'Mining', basePrice: 425 },
    { symbol: 'BPCL', name: 'Bharat Petroleum Corporation Ltd', sector: 'Energy', basePrice: 585 },
    { symbol: 'IOC', name: 'Indian Oil Corporation Ltd', sector: 'Energy', basePrice: 135 },
    { symbol: 'GRASIM', name: 'Grasim Industries Ltd', sector: 'Cement', basePrice: 2420 },
    { symbol: 'EICHERMOT', name: 'Eicher Motors Ltd', sector: 'Automobile', basePrice: 4685 },
  ];

  return stocks.map(stock => {
    // Generate random price variations
    const variation = (Math.random() - 0.5) * 0.1; // -5% to +5%
    const currentPrice = stock.basePrice * (1 + variation);
    const change = currentPrice - stock.basePrice;
    const changePercent = (change / stock.basePrice) * 100;
    const volume = Math.floor(Math.random() * 5000000) + 100000;

    // Generate market cap based on price
    const marketCapValue = currentPrice * (Math.random() * 500000 + 100000);
    let marketCap: string;
    if (marketCapValue >= 1000000) {
      marketCap = `₹${(marketCapValue / 100000).toFixed(2)}L Cr`;
    } else {
      marketCap = `₹${(marketCapValue / 10000).toFixed(2)}K Cr`;
    }

    return {
      symbol: stock.symbol,
      name: stock.name,
      sector: stock.sector,
      price: currentPrice,
      change: change,
      changePercent: changePercent,
      volume: volume,
      marketCap: marketCap,
    };
  });
};

export async function GET() {
  try {
    // In production, you would fetch from NSE API or a financial data provider
    // For now, we generate sample data
    const stocks = generateStockData();

    return NextResponse.json(stocks);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stock data' },
      { status: 500 }
    );
  }
}
