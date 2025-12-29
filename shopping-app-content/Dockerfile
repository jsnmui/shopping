# Use Eclipse Temurin OpenJDK 17
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy Maven wrapper, config, and pom first (cache-safe)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Make Maven wrapper executable
RUN chmod +x mvnw

# Copy the source code
COPY src ./src

# Force Maven to rebuild the JAR and show target contents
RUN ./mvnw clean package -DskipTests && ls -l target/

# Expose Spring Boot port
EXPOSE 8080

# Run the JAR (wildcard works even if version changes)
CMD ["sh", "-c", "java -jar target/*.jar"]
