// src/api/ecoFactsApi.js

// This mock API simulates fetching English eco facts (no network needed)
export const fetchEcoFacts = async () => {
  try {
    // Local eco facts data
    const facts = [
      {
        id: 1,
        title: 'Plastic Waste',
        body: 'Over 8 million tons of plastic enter our oceans every year, harming marine life and ecosystems.'
      },
      {
        id: 2,
        title: 'Deforestation',
        body: 'The world loses an area of forest roughly the size of 27 football fields every minute due to deforestation.'
      },
      {
        id: 3,
        title: 'Recycling Impact',
        body: 'Recycling a single aluminum can saves enough energy to power a television for three hours.'
      },
      {
        id: 4,
        title: 'Solar Power',
        body: 'The Earth receives enough sunlight each hour to meet the world’s energy needs for an entire year.'
      },
      {
        id: 5,
        title: 'Water Conservation',
        body: 'Turning off the tap while brushing your teeth can save up to 8 gallons of water each day.'
      },
      {
        id: 6,
        title: 'Tree Benefits',
        body: 'One mature tree absorbs carbon dioxide at a rate of 22 kilograms per year and releases enough oxygen for two people.'
      },
      {
        id: 7,
        title: 'Energy Efficiency',
        body: 'Switching to LED bulbs can reduce energy use by up to 80% compared to traditional lighting.'
      }
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return facts;
  } catch (error) {
    console.error('Error fetching eco facts:', error);
    throw error;
  }
};
