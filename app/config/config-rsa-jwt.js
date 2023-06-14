const node_jose = require('node-jose');

/**
 * PEM de llave publica
 */
const JWT_PUBLICKEY = 
'-----BEGIN PUBLIC KEY-----\n' +
'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyt/JM4jJUhPx2IUwIcy7\n' +
'm7bBs8UrFUYJJvYszoxfdV3mm7w3v/KgutwoKD0kUh6ar+85XfRWFCqpdQkpLF2K\n' +
'PXQGkQx5Dl4eh1bwmc+z84hH1kiFQXshCZhodVPjDeKG6EIBFQy4qPvytC9FD4II\n' +
'KYcB3WQ+AKRMBil4S4nu0mMhTqc+1KL26X+apfeWLgV+v8ZrSGl2tCNxli6Hrzxc\n' +
'sa/7l2mo/KRaAx26GLz53zQp/P7BV928/XCN5Lij/O13aKuJP5qVwMU/gUrSIjsK\n' +
'RZydXUMh383vSuKAD665hUaA8BmId9Of3vd47CpX6DNizSwR44kN98SS3v4H9NVj\n' +
'MQIDAQAB\n' +
'-----END PUBLIC KEY-----\n';

/**
 * PEM de llave privada
 */
const JWT_PRIVATEKEY = 
'-----BEGIN PRIVATE KEY-----\n' +
'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDK38kziMlSE/HY\n' +
'hTAhzLubtsGzxSsVRgkm9izOjF91XeabvDe/8qC63CgoPSRSHpqv7zld9FYUKql1\n' +
'CSksXYo9dAaRDHkOXh6HVvCZz7PziEfWSIVBeyEJmGh1U+MN4oboQgEVDLio+/K0\n' +
'L0UPgggphwHdZD4ApEwGKXhLie7SYyFOpz7Uovbpf5ql95YuBX6/xmtIaXa0I3GW\n' +
'LoevPFyxr/uXaaj8pFoDHboYvPnfNCn8/sFX3bz9cI3kuKP87Xdoq4k/mpXAxT+B\n' +
'StIiOwpFnJ1dQyHfze9K4oAPrrmFRoDwGYh305/e93jsKlfoM2LNLBHjiQ33xJLe\n' +
'/gf01WMxAgMBAAECggEAHYAxR9cqP087KdskRqX42gnXXQbc3vkSN6IwndB3yR9g\n' +
'e2EBUl471TBSfpd1gqOEpvTIiMsRAVm6zpQIcrUfdxQ6KDmCGP7Cvbd8wUEcz9sP\n' +
'Zy+ggQcgpL6O4hDSwaAhMgD3G1KAP8JzZpRBHKIyAafqM4FyKrG5hGPfZEyod9tD\n' +
't4mwUF7nIu7hfn6eLRJkadgu6iTn/yzOUk6DDjMfp0Gt8mWxveIAoODQPHKiXMyY\n' +
'/6HDYnFZ8OdpNna3Li0JziC12reInJV+bfa0S2XLXk3ZHOTiFCWjSmtKVDTDxuEz\n' +
'at1wkhNAKGcasjz9XZsNLOYLW9Eoxll7B7mjz1QgYQKBgQD/Dh4SxvLl64jz6B30\n' +
'fmSSqfhcIMayZrx+uPAzBy/yzaoKqcNnR4Cf2GjAWDAVE7Xv3al3d+KwP0lpYdOf\n' +
'a0OJR3q/dWXsGSPNUMvn8LHTh/kmQYKZNZuwbM3ltn4RVBJRlI4ulMxP6wUTPtkq\n' +
'UdZsyzBBgrI/ofMJqoCw99AWXQKBgQDLoC6z+fAeskOufqqaqAnA8AUpJiLlt5hV\n' +
'50SGtYdXLyYXEjEvnRPdVUWuV4xVr77BnGJ6RpNnXsErVndEXtWAcghw8agHS2HB\n' +
'Lgw0cFaVkBnIluPb23hDs4O9ccRLQeLWVVfKSvALCG+ZztmYwL2y6A4uWN+1XcNQ\n' +
'wuWUNXzK5QKBgDBt4c/27tAxdQO7I1T1WutuUrZLku71Cv2U6CcISlZ0LsFvkqbd\n' +
'sNKpKNq85ARchcNR94ezv9tvaOUVqjUvDNfYNrp79Cpsa5vkp5MW5O0heHGHJuEo\n' +
'iLNrNX1UtYNcz02mQ4kcv9685W3OFTYv6+Mkgbkus+HZQminc2Am7eARAoGAK8DV\n' +
'iDKSV+YyCNKK0gR9ZAmu8jKRmQ6kGwFAhjmHRUKKSrbL/tEfrZVfDaEeNGM4990k\n' +
'g+WaUsHXe/puUjCWa60VBz/FvRuDe8DrOnFRCX4XLDTP7TPxWYq/KfvCE/GqTie0\n' +
'X3FOtvAvGruJofr4R/L46RiLqSrmhvn53qjHkckCgYEA4aaywU6fn5KQJWjesiiE\n' +
'e9JNEWdWQqkwpAgX3rK6hY9gnc2mKs8ZjpdBa0+62qcEBC6SDLQH6vx0vjHuIcJ7\n' +
'BF1qQG4M7oRpvvFTL9QUv8w3HA4uCa40qruRGDZ895R0eTRXXhk1mEpYkhXpU/Fk\n' +
'Csz1QPU8zrcOtSfihWQKwDA=\n' +
'-----END PRIVATE KEY-----\n';

/**
 * Parsea el PEM de la llave publica. Retorna un objeto JWK para ser
 * utilizado en encriptacion.
 */
const publicKey = async () => {
    return await parsePEM(JWT_PUBLICKEY);
};

/**
 * Parsea el PEM de la llave privada. Retorna un objeto JWK para ser
 * utilizado en encriptar/desencriptar.
 */
const privateKey = async () => {
    return await parsePEM(JWT_PRIVATEKEY);
};

/**
 * Parsea el contenido de un PEM
 * @param {*} pemcontent 
 */
const parsePEM = async (pemcontent) => {
    return await node_jose.JWK.asKey(pemcontent, 'pem');
};

module.exports.publicKey = publicKey;
module.exports.privateKey = privateKey;
