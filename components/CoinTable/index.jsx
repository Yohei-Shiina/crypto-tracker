import PropTypes from 'prop-types'
import Coin from '../Coins'

function CoinTable(props) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Currency</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Volume</th>
            <th>24H</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {props.coins.map((coin) => {
            return (
              <Coin key={coin.id}
                name={coin.name}
                id={coin.id}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                volume={coin.total_volume}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            )
          })}
        </tbody>
      </table>
    </div >
  )
}

CoinTable.propTypes = {
  coins: PropTypes.array.isRequired
}

export default CoinTable


