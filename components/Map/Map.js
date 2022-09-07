import Script from "next/script"

const Map = () => {
  return (
    <div>
      <h2>Карта складов по Республике Тыва</h2>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A18ca53cce8bf64668fbdb3705e55f3b436465c9f0b36093d9d0f0825433fa97f&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
    </div>


  )
}

export default Map