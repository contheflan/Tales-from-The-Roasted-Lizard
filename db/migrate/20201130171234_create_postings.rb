class CreatePostings < ActiveRecord::Migration[6.0]
  def change
    create_table :postings do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, :limit => 50
      t.string :content
      t.string :img_url

      t.timestamps
    end
  end
end
