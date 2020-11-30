# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Posting.destroy_all
Comment.destroy_all
User.destroy_all

@admin = User.create!(
username: 'admin', 
img_url:'https://cdn.akc.org/content/hero/corgi_header_image.jpg', 
email: 'admin@email.com', 
password: '123456')

@user1 = User.create!(
username: 'mageslay2020',
img_url: 'https://images.uesp.net/thumb/0/06/ON-npc-Firstmage_Arnure.jpg/600px-ON-npc-Firstmage_Arnure.jpg',
email: 'mageslay@email.com',
password: '123456')

@user2 = User.create!(
username: 'urbul',
img_url: 'https://images.uesp.net/thumb/f/f7/OB-npc-Urbul_gro-Orkulg.jpg/600px-OB-npc-Urbul_gro-Orkulg.jpg',
email: 'urbul@email.com',
password: '123456')

puts "#{User.count} patrons er, users created!"

@posting1 = Posting.create!(
user: @user1, 
title: "A tale of misery! sad boys inquire within!", 
content: "I have decided to create a campaign where everyone is relives the most emotionally draining parts of their childhood!",
img_url: "https://media3.giphy.com/media/l0Iy5fjHyedk9aDGU/source.gif"
)

puts "#{Posting.count} postings created and shoved into the tavern!"

@comment1 = Comment.create!(
posting: @posting1,
user: @user2,
content: "thanks for posting, I hate this!",
img_url: "https://image.shutterstock.com/image-photo/sad-lonely-sleeping-panda-bear-260nw-1565814979.jpg"
)

puts "#{Comment.count} comments created!"
