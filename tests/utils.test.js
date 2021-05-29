const {calcPercentage,parserResult,calcAllCoins} = require('../src/utils')
jest.mock('../src/cryptocompare');
const cryptocompare = require('../src/cryptocompare');

const time = new Date('2020-05-05').getTime();

cryptocompare.getData.mockImplementation((coins,timestamp) => {
    if(timestamp===time/1000){
        return{
            BTC:2,
            DOGE:4
        }
    }
    else {
        return{
            BTC:1,
            DOGE:6
        }
    }

});


describe('test utils', () => {
    test('Should calculate percentage', () => {
        const result = calcPercentage(10,13)
        expect(result).toBe(30);
    });

    test('Should parser result',  () => {
        const result =  parserResult([{
            currency:'BTC',
            value:-50
        }, {
            currency:'DOGE',
            value:50
        }
        ]);
        expect(result[0]).toMatchObject({BTC:'-50%'})
        expect(result[1]).toMatchObject({DOGE:'50%'})
    });

    test('Should calculate All Coins',  async() => {
        const result =  await calcAllCoins('BTC,DOGE',time);
        expect(result[0]).toMatchObject({currency:'BTC', value:-50})
        expect(result[1]).toMatchObject({currency:'DOGE', value:50})
    });

  });