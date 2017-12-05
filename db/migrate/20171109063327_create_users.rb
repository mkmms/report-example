class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :phone
      t.string :address_line1
      t.string :address_line2
      t.string :state
      t.string :city
      t.string :country
      t.string :status
      t.string :marital_status

      t.timestamps
    end
  end
end
