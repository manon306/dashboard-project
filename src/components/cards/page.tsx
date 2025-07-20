import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';

const cards = [
  {
    name: "Weekly Sales",
    price: "$ 15,000",
    description: "Increased by 60% compared to last month",
    icon: "/icons/sales.svg",
    color: "#3b82f6" // blue
  },
  {
    name: "Monthly Revenue",
    price: "$ 50,000",
    description: "Increased by 30% compared to last month",
    icon: "/icons/revenue.svg",
    color: "#10b981" // green
  },
  {
    name: "Yearly Profit",
    price: "$ 200,000",
    description: "Increased by 20% compared to last year",
    icon: "/icons/profit.svg",
    color: "#facc15" // yellow
  }
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        padding: 3,
        backgroundColor: '#f9fafb',
      }}
      className="dark:bg-gray-800 dark:text-white"
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          onClick={() => setSelectedCard(index)}
          sx={{
            flex: '1 1 250px',
            maxWidth: 300,
            height: 180,
            borderRadius: 3,
            boxShadow: selectedCard === index ? 6 : 1,
            backgroundColor: selectedCard === index ? '#e0f2fe' : 'white',
            transition: '0.3s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          className="dark:bg-gray-800 dark:text-white"
        >
          <CardActionArea sx={{ height: '100%', px: 2 }}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar src={card.icon} alt={card.name} sx={{ bgcolor: card.color, width: 48, height: 48 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {card.name}
                </Typography>
                <Typography variant="h5" color="primary" mt={1}>
                  {card.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {card.description}
                </Typography>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;
