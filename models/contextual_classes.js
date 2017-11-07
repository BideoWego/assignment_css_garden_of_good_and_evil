

module.exports = settings => {

  const morality = {
    good: 'good',
    evil: 'evil'
  }[settings.morality] || 'good';

  const favoriteFood = {
    banana: 'bananas',
    bananas: 'bananas',
    strawberry: 'strawberries',
    strawberries: 'strawberries'
  }[settings.favoriteFood] || '';

  const favoriteColor = {
    red: 'red',
    blue: 'blue',
    green: 'green'
  }[settings.favoriteColor] || '';

  return [
    morality,
    favoriteFood,
    favoriteColor
  ].join(' ');
};






