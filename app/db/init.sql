CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    completed BOOLEAN DEFAULT false
);

INSERT INTO tasks (title, completed)
VALUES
('Learn Terraform', false),
('Set up Jenkins', false),
('Deploy Node.js app', true);
