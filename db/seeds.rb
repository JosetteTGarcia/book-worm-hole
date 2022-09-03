#
puts "Seeding data..."

Genre.create(name: "Fantasy")
Genre.create(name: "Romance")
Genre.create(name: "Mystery")
Genre.create(name: "Science Fiction")
Genre.create(name: "Historical")
Genre.create(name: "Memoir")
Genre.create(name: "Self-Help")



Book.create!(
  title: "It Ends With Us",
  author: "Colleen Hoover",
  img_url: "https://images-na.ssl-images-amazon.com/images/I/51i7u1BKY5L._SX330_BO1,204,203,200_.jpg",
  average_rating: 4.5,
  genre_id: 170
)


  Book.create(                        
    title: "Where The Crawdads Sing",
    author: "Delia Ownens",
    img_url: "https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095",
    average_rating: 5,
    genre_id: 171
  )
  Book.create(
    title: "Atomic Habits",
    author: "James Clear",
    img_url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    average_rating: 4.7,
    genre_id: 175
  )

  UserBook.create!(
    user_id: 3,
    book_id: 9,
    user_notes: "This book was okay. Not as good as everyone says. I liked the ending though.",
    date_started: '2022-06-26',
    date_completed: '2022-06-30',
    is_completed: true, 
    rating: 3.5,
  )

  UserBook.create!(
    user_id: 3,
    book_id: 10,
    user_notes: "Slow start. Having trouble finishing.",
    date_started: '2022-07-03',
    date_completed: nil,
    is_completed: false, 
    rating: nil,
  )


puts "Done seeding!"