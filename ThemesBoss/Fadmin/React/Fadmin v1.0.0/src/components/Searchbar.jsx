
import { MdClose } from 'react-icons/md'

function Searchbar({toggleSearchbar}) {
  return (
    <div className="search-form">
        <form action="#" method="GET">
          <div className="input-group border">
            <input
              type="text"
              name="search"
              className="form-control search-input"
              placeholder="Type something..."
            />
            <span className="input-group-btn">
              <button
                onClick={toggleSearchbar}
                className="btn btn-default"
                id="close-search"
                type="button"
              >
                <i>
                  <MdClose />
                </i>
              </button>
            </span>
          </div>
        </form>
      </div>
  )
}

export default Searchbar