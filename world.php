<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

    $country = $_GET['country'] ?? '';

    $stmt = $conn->prepare("SELECT name, continent, independence_year, head_of_state 
                            FROM countries 
                            WHERE name LIKE :country");
    $stmt->execute(['country' => "%$country%"]);

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($results) {
        echo '<table class="result-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Continent</th>
                        <th>Independence Year</th>
                        <th>Head of State</th>
                    </tr>
                </thead>
                <tbody>';
        foreach ($results as $row) {
            echo '<tr>
                    <td>' . htmlspecialchars($row['name']) . '</td>
                    <td>' . htmlspecialchars($row['continent']) . '</td>
                    <td>' . htmlspecialchars($row['independence_year']) . '</td>
                    <td>' . htmlspecialchars($row['head_of_state']) . '</td>
                  </tr>';
        }
        echo '</tbody></table>';
    } else {
        echo '<p>No matching records found.</p>';
    }
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
