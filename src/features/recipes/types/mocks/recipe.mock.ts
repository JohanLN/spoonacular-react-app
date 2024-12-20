import { Recipe } from '../shemas/recipe.schema';

const recipeMock = {
  vegetarian: true,
  vegan: true,
  glutenFree: true,
  dairyFree: true,
  veryHealthy: true,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  lowFodmap: false,
  weightWatcherSmartPoints: 5,
  gaps: 'no',
  preparationMinutes: null,
  cookingMinutes: null,
  aggregateLikes: 19,
  healthScore: 83,
  creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
  license: 'CC BY 3.0',
  sourceName: 'Foodista',
  pricePerServing: 69.09,
  extendedIngredients: [
    {
      id: 2069,
      aisle: 'Oil, Vinegar, Salad Dressing',
      image: 'balsamic-vinegar.jpg',
      consistency: 'LIQUID',
      name: 'balsamic vinegar',
      nameClean: 'balsamic vinegar',
      original: '3 tablespoons balsamic vinegar',
      originalName: 'balsamic vinegar',
      amount: 3.0,
      unit: 'tablespoons',
      meta: [],
      measures: {
        us: {
          amount: 3.0,
          unitShort: 'Tbsps',
          unitLong: 'Tbsps',
        },
        metric: {
          amount: 3.0,
          unitShort: 'Tbsps',
          unitLong: 'Tbsps',
        },
      },
    },
    {
      id: 11215,
      aisle: 'Produce',
      image: 'garlic.png',
      consistency: 'SOLID',
      name: 'garlic',
      nameClean: 'garlic',
      original: '1 clove garlic, minced',
      originalName: 'garlic, minced',
      amount: 1.0,
      unit: 'clove',
      meta: ['minced'],
      measures: {
        us: {
          amount: 1.0,
          unitShort: 'clove',
          unitLong: 'clove',
        },
        metric: {
          amount: 1.0,
          unitShort: 'clove',
          unitLong: 'clove',
        },
      },
    },
    {
      id: 11233,
      aisle: 'Produce',
      image: 'kale.jpg',
      consistency: 'SOLID',
      name: 'curly kale',
      nameClean: 'kale',
      original: '1 bunch curly kale, stems removed and chopped',
      originalName: 'curly kale, stems removed and chopped',
      amount: 1.0,
      unit: 'bunch',
      meta: ['chopped'],
      measures: {
        us: {
          amount: 1.0,
          unitShort: 'bunch',
          unitLong: 'bunch',
        },
        metric: {
          amount: 1.0,
          unitShort: 'bunch',
          unitLong: 'bunch',
        },
      },
    },
    {
      id: 4053,
      aisle: 'Oil, Vinegar, Salad Dressing',
      image: 'olive-oil.jpg',
      consistency: 'LIQUID',
      name: 'olive oil',
      nameClean: 'olive oil',
      original: 'Olive oil',
      originalName: 'Olive oil',
      amount: 2.0,
      unit: 'servings',
      meta: [],
      measures: {
        us: {
          amount: 2.0,
          unitShort: 'servings',
          unitLong: 'servings',
        },
        metric: {
          amount: 2.0,
          unitShort: 'servings',
          unitLong: 'servings',
        },
      },
    },
  ],
  id: 644387,
  title: 'Garlicky Kale',
  readyInMinutes: 45,
  servings: 2,
  sourceUrl: 'https://www.foodista.com/recipe/J2FTJBF7/garlicky-kale',
  image: 'https://img.spoonacular.com/recipes/644387-556x370.jpg',
  imageType: 'jpg',
  summary:
    'Garlicky Kale requires approximately <b>45 minutes</b> from start to finish. This side dish has <b>170 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b> per serving. This recipe serves 2. For <b>69 cents per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you\'re following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 99%</b>, this dish is outstanding. Try <a href="https://spoonacular.com/recipes/garlicky-kale-248759">Garlicky Kale</a>, <a href="https://spoonacular.com/recipes/garlicky-kale-1267347">Garlicky Kale</a>, and <a href="https://spoonacular.com/recipes/garlicky-kale-1584523">Garlicky Kale</a> for similar recipes.',
  cuisines: [],
  dishTypes: ['side dish'],
  diets: [
    'gluten free',
    'dairy free',
    'paleolithic',
    'lacto ovo vegetarian',
    'primal',
    'whole 30',
    'vegan',
  ],
  occasions: [],
  instructions:
    '<ol><li>Heat the olive oil in a large pot over medium heat.</li><li>Add the kale and cover.</li><li>Stir occasionally until the volume of the kale is reduced by half. Uncover. Add garlic and basalmic.</li><li>Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.</li><li>Serve hot.</li></ol>',
  analyzedInstructions: [
    {
      name: '',
      steps: [
        {
          number: 1,
          step: 'Heat the olive oil in a large pot over medium heat.',
          ingredients: [
            {
              id: 4053,
              name: 'olive oil',
              localizedName: 'olive oil',
              image: 'olive-oil.jpg',
            },
          ],
          equipment: [
            {
              id: 404752,
              name: 'pot',
              localizedName: 'pot',
              image:
                'https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg',
            },
          ],
        },
        {
          number: 2,
          step: 'Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.',
          ingredients: [
            {
              id: 11233,
              name: 'kale',
              localizedName: 'kale',
              image: 'kale.jpg',
            },
          ],
          equipment: [],
        },
        {
          number: 3,
          step: 'Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.',
          ingredients: [
            {
              id: 2053,
              name: 'vinegar',
              localizedName: 'vinegar',
              image: 'vinegar-(white).jpg',
            },
            {
              id: 11215,
              name: 'garlic',
              localizedName: 'garlic',
              image: 'garlic.png',
            },
          ],
          equipment: [],
        },
        {
          number: 4,
          step: 'Serve hot.',
          ingredients: [],
          equipment: [],
        },
      ],
    },
  ],
  originalId: null,
  spoonacularScore: 98.9389419555664,
  spoonacularSourceUrl: 'https://spoonacular.com/garlicky-kale-644387',
} as Recipe;

export default recipeMock;
