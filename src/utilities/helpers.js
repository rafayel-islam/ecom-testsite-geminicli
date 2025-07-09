export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star text-gray-400"></i>); // Outline star
    }
  }
  return <div className="flex justify-center mb-2">{stars}</div>;
};