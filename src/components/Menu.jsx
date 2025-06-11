const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Sambar Idly",
      price: "$40.00",
      image: "./images/360_F_161136674_NgVFcPtWfwLPY03NpJUrSiH9oDvma9Rn.jpg",
      class: "img1"
    },
    {
      id: 2,
      name: "Masal Dosa",
      price: "$55.00",
      image: "./images/istockphoto-509992632-612x612.jpg",
      class: "img2"
    },
    {
      id: 3,
      name: "Aambur Biriyani",
      price: "$120.00",
      image: "./images/istockphoto-516401834-612x612.jpg",
      class: "img1"
    },
    {
      id: 4,
      name: "Andhra Meals",
      price: "$65.00",
      image: "./images/Nagarjuna.jpg",
      class: "img2"
    },
    {
      id: 5,
      name: "Kozha puttu",
      price: "$70.00",
      image: "./images/kerala-cuisine-white-rice-puttu-delicious-served-chickpea-curry-bananas-83379834.jpg",
      class: "img1"
    },
    {
      id: 6,
      name: "Meen polichathu",
      price: "$115.00",
      image: "./images/kerala-style-karimeen-pollichathu.jpg",
      class: "img2"
    }
  ]

  return (
    <div className="row">
      {menuItems.map(item => (
        <div className="column" key={item.id}>
          <img 
            className={item.class} 
            src={item.image} 
            alt="food" 
            width="50%" 
          />
          <h5>
            {item.name}
            <span>{item.price}</span>
          </h5>
          <button className="btn btn-outline-warning">ADD</button>
        </div>
      ))}
      <hr />
    </div>
  )
}

export default Menu