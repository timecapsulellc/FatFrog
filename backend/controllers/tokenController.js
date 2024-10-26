const tokenInteraction = require('../utils/tokenInteraction');

class TokenController {
    async getTokenInfo(req, res) {
        try {
            const tokenInfo = await tokenInteraction.getTokenInfo();
            res.json({
                success: true,
                data: tokenInfo
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async getBalance(req, res) {
        try {
            const { address } = req.params;
            if (!address) {
                return res.status(400).json({
                    success: false,
                    error: 'Address is required'
                });
            }

            const balance = await tokenInteraction.getBalance(address);
            res.json({
                success: true,
                data: {
                    address,
                    balance
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async getAllowance(req, res) {
        try {
            const { owner, spender } = req.params;
            if (!owner || !spender) {
                return res.status(400).json({
                    success: false,
                    error: 'Owner and spender addresses are required'
                });
            }

            const allowance = await tokenInteraction.getAllowance(owner, spender);
            res.json({
                success: true,
                data: {
                    owner,
                    spender,
                    allowance
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = new TokenController();
