 # Use Eclipse Temurin OpenJDK 17
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy everything at once to avoid caching issues
COPY . .

# Make Maven wrapper executable
RUN chmod +x mvnw

# Build the Spring Boot app (skip tests)
RUN ./mvnw clean package -DskipTests

# List contents of target to verify JAR
RUN ls -l target/

# Expose Spring Boot port
EXPOSE 8888

# Run the app (works even if version changes)
CMD ["sh", "-c", "java -jar target/*.jar"]
