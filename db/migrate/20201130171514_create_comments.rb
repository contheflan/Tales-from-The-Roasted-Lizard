class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.references :user, null: false, foreign_key: true
      t.string :content
      t.string :img_url
      t.references :posting, null: false, foreign_key: true

      t.timestamps
    end
  end
end
