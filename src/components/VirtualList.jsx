const TOTAL_ITEMS = 1000
const ITEM_HEIGHT = 50
const VISIBLE_COUNT = 10 // Show only 10 at a time

export function VirtualList() {
  const [scrollTop, setScrollTop] = useState(0)

  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT)
  const endIndex = Math.min(TOTAL_ITEMS, startIndex + VISIBLE_COUNT)

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop)
  }

  return (
    <div
      onScroll={handleScroll}
      style={{
        overflowY: "auto",
        height: ITEM_HEIGHT * VISIBLE_COUNT,
        border: "1px solid black",
      }}
    >
      <div style={{ height: TOTAL_ITEMS * ITEM_HEIGHT, position: "relative" }}>
        {Array.from({ length: TOTAL_ITEMS }).map((_, index) => {
          if (index < startIndex || index > endIndex) return null
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: index * ITEM_HEIGHT,
                height: ITEM_HEIGHT,
                width: "100%",
                background: index % 2 === 0 ? "#f0f0f0" : "#ddd",
              }}
            >
              Item {index + 1}
            </div>
          )
        })}
      </div>
    </div>
  )
}
