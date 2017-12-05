# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
count = 1
5000.times do 
	Rails.logger.info("========= started #{count}===========")
	User.create({
		email: "mohankumar.m@ticketsimply.com",
    password: "Admin@123",
    first_name: "Mohankumar",
    last_name: "Murugesan",
    gender: "Male",
    phone: "8861869419",
    address_line1: "No 39/25, Naveen building, 1st main",
    address_line2: "maruthi nagar, madiwala",
    state: "Karnataka",
    city: "Bangalore",
    country: "India",
    status: "Active",
    marital_status: "Single"
	})
	Rails.logger.info("========= end ===========")	
	count += 1
end