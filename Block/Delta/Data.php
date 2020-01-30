<?php


namespace Xigen\Javascript\Block\Delta;

/**
 * Class Data
 * @package Xigen\Javascript\Block\Delta
 */
class Data extends \Magento\Framework\View\Element\Template
{
    /**
     * Constructor
     * @param \Magento\Framework\View\Element\Template\Context  $context
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        array $data = []
    ) {
        parent::__construct($context, $data);
    }
}
