DROP TABLE IF EXISTS stories;

CREATE TABLE stories (
    id serial PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL,
    published timestamp DEFAULT CURRENT_TIMESTAMP
);

ALTER SEQUENCE stories_id_seq RESTART WITH 1001;

INSERT INTO stories (title, content) VALUES
    ('What the World Would Be Like If Full-Stack Web Dev Didn''t Exist', 'Blog post text goes here 1.'), 
    ('How Kitten Videos Can Keep You from Full-Stack Web Dev', 'Blog post text goes here 2.'),
    ('Why Do People Think Full-Stack Web Dev Is a Good Idea?', 'Blog post text goes here 3.'), 
    ('What the Beatles Could Learn from Full-Stack Web Dev', 'Blog post text goes here 1.'), 
    ('18 Reasons You Should be Talking About Full-Stack Web Dev', 'Blog post text goes here 2.'), 
    ('Why Holden Caulfield Thinks Full-Stack Web Dev is Phony', 'Blog post text goes here 3.'), 
    ('The 15 Worst Full-Stack Web Devs in History', 'Blog post text goes here 1.'), 
    ('9 Great Articles About Full-Stack Web Dev', 'Blog post text goes here 2.'), 
    ('7 Reasons Full-Stack Web Devs Could Help Win Top Chef', 'Blog post text goes here 3.'), 
    ('13 Ways Full-Stack Web Dev Can Find You the Love of Your Life', 'Blog post text goes here 3.');

SELECT * FROM stories;    