import bcrypt

class PasswordManager:
    """
    A class to manage password operations such as hashing and verifying passwords.
    """

    def hash_password(self, password: str) -> str:
        """
        Hash a password using a secure hashing algorithm.

        :param password: The password to hash.
        :return: The hashed password.
        """
        return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    def verify_password(self, password: str, hashed_password: str) -> bool:
        """
        Verify a password against a hashed password.

        :param password: The plain text password to verify.
        :param hashed_password: The hashed password to compare against.
        :return: True if the password matches, False otherwise.
        """
        return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))
    
password_manager = PasswordManager()