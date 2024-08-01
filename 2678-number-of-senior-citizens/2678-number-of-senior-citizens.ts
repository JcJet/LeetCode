function countSeniors(details: string[]): number {
    return details.filter((detail) => detail.substring(11, 13) > '60').length;
};